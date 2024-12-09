const app = Vue.createApp({
    data() {
      return {
        products: [],
      };
    },
    methods: {
      fetchProducts() {
        axios.get('https://www.course-api.com/react-store-products')
          .then((response) => {
            this.products = response.data.map(product => ({
              ...product,
              showDetails: false  // Inicializamos la propiedad para mostrar/ocultar detalles
            }));
          })
          .catch((error) => {
            console.error('Error fetching products:', error);
          });
      },
  
      toggleDetails(productId) {
        const product = this.products.find(p => p.id === productId);
        product.showDetails = !product.showDetails;  // Cambiamos el estado de "mostrar detalles"
      }
    },
    mounted() {
      this.fetchProducts();  // Llama a la API al cargar el componente
    }
  });
  
  app.mount("#app");
  