module.exports = {
    async Login_btn(req,res){
        try{
            return res.render('Login');
        } catch(error){
            return res.status(403).json({"message":error});
        }
    },
    async home(req,res){
        try{
            return res.render('Home');
        } catch(err){
            return res.status(403).json({"message":error});
        }
    },
    async automate(req,res){
        try{
            return res.render('Automate');
        } catch(err){
            return res.status(403).json({"message":err});
        }
    }
};