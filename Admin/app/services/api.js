class Api {
    fetchData() {
        const promise = axios({
            url: "https://67a5bf43c0ac39787a1f451c.mockapi.io/Product",
            method: "GET",
        });

        return promise;
    }

    deleteDataById(id) {
        const promise = axios({
            url: `https://67a5bf43c0ac39787a1f451c.mockapi.io/Product/${id}`,
            method: "DELETE",
        });

        return promise;
    }

    addData(product) {
        const promise = axios({
            url: "https://67a5bf43c0ac39787a1f451c.mockapi.io/Product",
            method: "POST",
            data: product,
        });

        return promise;
    }

    getDataById(id) {
        const promise = axios({
            url: `https://67a5bf43c0ac39787a1f451c.mockapi.io/Product/${id}`,
            method: "GET",
        });

        return promise;
    }

    updateData(product) {
        const promise = axios({
            url: `https://67a5bf43c0ac39787a1f451c.mockapi.io/Product/${product.id}`,
            method: `PUT`,
            data: product,
        });

        return promise;
    }
}
export default new Api();
