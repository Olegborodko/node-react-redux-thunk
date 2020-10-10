const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum neque mauris, vitae fringilla sem dapibus et. Nulla auctor dolor dui, in sodales enim sodales et.' 

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          id: 1, 
          title: 'New York City',
          price: 1,
          body,
          imgLink: '/img/1.jpg'
        },
        {
          id: 2, 
          title: 'Chicago',
          price: 2,
          body,
          imgLink: '/img/2.jpg'
        },
        {
          id: 3, 
          title: 'Atlanta and the South',
          price: 2.5,
          body,
          imgLink: '/img/3.jpg'
        },
        {
          id: 4, 
          title: 'Kansas City',
          price: 1.2,
          body,
          imgLink: '/img/4.jpg'
        },
      ])
    }).then(function () {
      return knex.raw('SELECT setval(\'products_id_seq\', (SELECT MAX(id) from "products"));')
    })
}
