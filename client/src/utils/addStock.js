const addStock = (brands, styles, colors, sizes, warehouses) => {
    styles.forEach(style => {
        if (brands[0].id === style.BrandId) {
            colors.forEach(color => {
                if (style.id === color.StyleId) {
                    sizes.forEach(size => {
                        if (color.id === size.ColorId) {
                            warehouses.forEach(warehouse => {
                                API.addStock({
                                    qty: 100,
                                    SizeId: size.id,
                                    WarehouseId: warehouse.id
                                })
                                    .then(res => {
                                        console.log(res.data)
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    });
                            })
                        }
                    })
                }
            })
        }
    })
}