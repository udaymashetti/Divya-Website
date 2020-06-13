import axios from 'axios';

export class GalleriaService {

    getImages() {
        return axios.get('data/galleria.json')
                .then(res => res.data.data);
    }
}