import API from "./API"

export default {
    addStock: () => {
        // Brands
        // API.getBrands()
        //     .then(res => {
        //         // Styles
        //         console.log(res.data)
        //         API.getStyles(res.data[3].id)
        //             .then(res => {
        //                 // Colors
        //                 res.data.forEach(style => {
        //                     API.getColors(style.id)
        //                         .then(res => {
        //                             // Sizes
        //                             res.data.forEach(color => {
        //                                 API.getSizes(color.id)
        //                                     .then(res => {
        //                                         // Warehouses
        //                                         const sizes = res.data
        //                                         sizes.forEach(size => {
        //                                             API.getWarehouses()
        //                                                 .then(res => {
        //                                                     // Stock
        //                                                     const warehouses = res.data
        //                                                     warehouses.forEach(warehouse => {
        //                                                         // add stock
        //                                                         API.createStock({
        //                                                             SizeId: size.id,
        //                                                             WarehouseId: warehouse.id,
        //                                                             qty: 100
        //                                                         })
        //                                                             .then(res => {
        //                                                                 console.log(res.data)
        //                                                                 if (size.id === 720 && warehouse.id === 4)
        //                                                                 console.log("finished")
        //                                                             })
        //                                                             .catch(err => {
        //                                                                 console.log(err)
        //                                                             })
        //                                                     })
        //                                                 })
        //                                                 .catch(err => {
        //                                                     console.log(err)
        //                                                 })
        //                                         });
        //                                     })
        //                                     .catch(err => {
        //                                         console.log(err)
        //                                     })
        //                             });
        //                         })
        //                         .catch(err => {
        //                             console.log(err)
        //                         })
        //                 });
        //             })
        //             .catch(err => {
        //                 console.log(err)
        //             })
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }
};