const {User} = require("../../models");
const userDetail = async (req, res) => {
    try{
        await User.findOne({
            where:{
                //test를 위해 임시로 1로 둠
                userID: req.session.user.userID
            },
            attributes: ["userName","birth","sex","accompanierName","accompanierPhone"]
        }).then((user)=>{
            res.render("profile",{
                user: user
            });
        })
    }catch(error){
        console.log(error);
        next(error);
    }
};

const userEdit = async (req,res) => {
    try{
        await User.findOne({
            where:{
                //테스트를 위해 임시로 1로 둠
                userID: req.session.user.userID
            },
            attributes: ["userName","birth","sex","accompanierName","accompanierPhone"]
        }).then((user)=>{
            res.render("editProfile",{
                user: user
            });
        })
    }catch(error){
        console.log(error);
        next(error);
    }
};

const userUpdate = async (req, res) => {
    try{
        const {accompanierName, accompanierPhone} = req.body;
        await User.update({
            accompanierName: accompanierName,
            accompanierPhone: accompanierPhone
        },{
            where: {
                //test를 위해 임시로 1로 둠
                userID: req.session.user.userID
            }
        }).then((user)=>{
            res.redirect("/user");
        })
    }catch(error){
        console.log(error);
        next(error);
    }
    

};

module.exports = {
    userDetail,
    userEdit,
    userUpdate
};
