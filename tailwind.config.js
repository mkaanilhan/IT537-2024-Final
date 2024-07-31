/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        bg_page: '#FFF8EB',
        login_title: '#A9ABB6',
        bg_bottom_unselected: '#EBEBEE',
        bg_bottom_selected: '#7209b7',
        bg_login_button: '#7209b7',
        progress_bar: '#7209b7',
        bottom_nav_icon_unselected: '#bbd0ff',
        bottom_nav_icon_selected: '#7209b7',
        header_text: '#bbd0ff',
        bg_search_view: '#d0d1ff',
        search_view_border: '#bbd0ff',
        bg_food_card: '#d0d1ff',
        food_card_border: '#bbd0ff',
        food_card_item: '#7209b7',
        bg_favorite_card: '#d0d1ff',
        favorite_card_border: '#bbd0ff',
        favorite_card_item: '#7209b7',
        bg_cart_card: '#d0d1ff',
        cart_card_border: '#bbd0ff',
        cart_card_item: '#7209b7',
        cart_total: '#7209b7',
        cart_total_cargo: '#4cc9f0',
        account_card_item: '#474747',
        bg_update_button: '#7209b7',
        product_detail_favorite: '#bbd0ff',
        product_detail_item: '#7209b7',
        product_detail_star: '#f72585',
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'sans': ['Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
