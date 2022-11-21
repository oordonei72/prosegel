/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'montaje':"url('../img/montaje-electromecanicos.png')",
        'montajet':"url('../img/montajetransformadores2.jpg')",
        'proyecto':"url('../img/proyectos.jpg')"
      },
      backgroundColor: theme =>({
        ...theme('colors'),
        'primary':'#FF0000',
        'secondary':'#FFEBEB',
        'terceario':'#274A300'
      }),
      textColor:{
        'primary':'#FF0000',
        'secondary':'#FFEBEB',
        'terceario':'#274A300'
      },
      fontFamily:{
        Roboto:['Roboto','Lato','Sans-serif']
      }

    },
  },
  plugins: [],
}