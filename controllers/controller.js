const {Driver, Menu, Order, OrderMenu, User, UserProfile} = require("../models/index")

class Controller{
    static async landingPage(req, res) {
        try {
           const data = await Menu.findAll({
                limit: 6,
                order: [['createdAt', 'DESC']]
            })

            res.render('landingPage', { data })
        } catch (error) {
            res.send("Controlerr",error)
        }
    }
    static async login(req, res) {
        try {
           const data = await Menu.findAll({
                limit: 6,
                order: [['createdAt', 'DESC']]
            })

            res.render('landingPage', { data })
        } catch (error) {
            res.send("Controlerr",error)
        }
    }
    static async dashboard(req, res) {
        try {
           const data = await Menu.findAll()

            res.render('dashboard', { data })
        } catch (error) {
            res.send("Controlerr",error)
        }
    }
}
module.exports = Controller