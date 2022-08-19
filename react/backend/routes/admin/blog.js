var express = require('express');
var router = express.Router();
var blogModel = require('../../models/blogModel')

/* GET home page. */
router.get('/', async function (req, res, next) {

  var blog = await blogModel.getBlog();

  res.render('admin/blog', {
    layout: 'admin/layout',
    persona: req.session.nombre, blog
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
})


router.post('/agregar', async (req, res, next) => {
  try {
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await blogModel.insertBlog(req.body);
      res.redirect('/admin/blog')
    } else {
      res.render('/admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campo son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('/admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargó la noticia'
    })
  }
})

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await blogModel.deleteBlogById(id);
  res.redirect('/admin/blog');
});



router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  var blog = await blogModel.getBlogById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    blog
  });
});

router.post('/modificar', async (req, res, next) => {
  try {
    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    //console.log(obj)

    await blogModel.modificarBlogById(obj, req.body.id);
    res.redirect('/admin/blog');

  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó la noticia'
    })
  }
})

module.exports = router;