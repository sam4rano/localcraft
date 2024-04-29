/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#150E1C',
       
        'primary-bg':"#ECD8EA",
        'bg-grey':'#E6E6FA',
        'text-blue':'#3973D4',
        'button-inactive':'#F7F0F7',
        'button-hover':'#280E3B',
        'neutral': '#FFFFFF',
        
        'gray-bg':'#B5B8BB',
        'overlay': '#F2F2F2',
        'warning':'#BDD0F133',
        'gray-four':'#534656',
       
        'type-active':'#B15EA8',
  
      },
      fontFamily: {
        'sans':['"Josefin Sans","Inconsolata","Poppins"']
  
      },
      screens: {
        sm:{min:"360px", max:"600px"},
        md:{ min: "601px", max: "900px" },
        lg: { min: "901px" }
      },
    },
  },
  plugins: [],
}

