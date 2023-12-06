import axios from "axios";




// Константи:
const BASE_URL = 'https://food-boutique.b.goit.study/api/products/categories';
const API_KEY = 'live_3D2cMhQlEJ7vd6aSoPS7npBO0fxZO1welUEt4RfV4cU4u5uSgA89im82uOpSVcxT';
const ENDPOINT = '/breeds'
const ENDPOINTCAT = '/images/search' 
axios.defaults.headers.common['x-api-key'] = API_KEY;