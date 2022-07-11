let rooms = [{
        "name": "經濟雙人房",
        "eng": "Economy Double Room",
        "price": 7000,
        "amount": 0,
        "cover": "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
        "discount": 0.9,
        "equipment": {
            "wifi": false,
            "bathtub": true,
            "breakfast": true
        }
    },
    {
        "name": "海景三人房",
        "eng": "Sea view triple Room",
        "price": 7800,
        "amount": 0,
        "cover": "https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "discount": 0.8,
        "equipment": {
            "wifi": true,
            "bathtub": true,
            "breakfast": false
        }
    },
    {
        "name": "典雅景觀房",
        "eng": "Elegant landscape Room",
        "price": 5400,
        "amount": 0,
        "cover": "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "discount": 0.85,
        "equipment": {
            "wifi": false,
            "bathtub": true,
            "breakfast": true
        }
    },
    {
        "name": "尊享豪華房",
        "eng": "Exclusive Deluxe Room",
        "price": 9800,
        "amount": 0,
        "cover": "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "discount": 0.8,
        "equipment": {
            "wifi": true,
            "bathtub": false,
            "breakfast": true
        }
    },
    {
        "name": "商務雙人房",
        "eng": "Business Double Room",
        "price": 5600,
        "amount": 0,
        "cover": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "discount": 0.9,
        "equipment": {
            "wifi": true,
            "bathtub": false,
            "breakfast": false
        }
    },
    {
        "name": "溫泉雙人房",
        "eng": "Hot spring double Room",
        "price": 8400,
        "amount": 0,
        "cover": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "discount": 0.6,
        "equipment": {
            "wifi": true,
            "bathtub": true,
            "breakfast": true
        }
    },
    {
        "name": "總統套房",
        "eng": "Presidential Suite",
        "price": 23000,
        "amount": 0,
        "cover": "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "discount": 0.75,
        "equipment": {
            "wifi": true,
            "bathtub": true,
            "breakfast": true
        }
    },
    {
        "name": "奢華四人房",
        "eng": "Luxury four Room",
        "price": 8500,
        "amount": 0,
        "cover": "https://images.unsplash.com/photo-1594563703937-fdc640497dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        "discount": 0.7,
        "equipment": {
            "wifi": true,
            "bathtub": true,
            "breakfast": false
        }
    }
];
Vue.component('room', {
    template: '#room',
    props: ["room_data", "hotel_discount", "hotel_fee", "delete_room", "id"],
    computed: {
        final_discount: function() {
            return this.room_data.discount * this.hotel_discount;

        },
        final_discount_show: function() {
            return parseInt(this.final_discount * 100);
        },
        final_price: function() {
            return parseInt(this.room_data.price * this.final_discount) + 1 * (this.hotel_fee);
        },
        bg_css: function() {
            return {
                "background-image": "url('" + this.room_data.cover + "')"
            }

        }
    }
})

let vm = new Vue({
    el: '#app',
    data: {
        rooms: rooms,
        discount: 0.9,
        service_fee: 200,
        edit_id: 0
    },
    methods: {
        addRoom: function() {
            this.rooms.push({
                "name": "新房間",
                "eng": "",
                "price": 0,
                "amount": 0,
                "cover": "",
                "discount": 0.5,
                "equipment": {
                    "wifi": true,
                    "bathtub": true,
                    "breakfast": true
                }
            });
            this.edit_id = this.rooms.length - 1;
        },
        delete_room: function(id) {
            this.rooms.splice(id, 1);
        }
    }
})