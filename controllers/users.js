const router=require('express').Router();
const {User,Dog}=require('../models/index')

router.get('/all',async (req,res)=>{
    try{
        const all = await User.findAll()
        res.json(all)
    } catch (error) {
        res.json({error})
    }
})
router.get('/dog/:did',async (req,res)=>{
    try{
        const dog=await Dog.findOne({
            where:{id:req.params.did}
        })
        const user = await User.findOne({
            where:{id:dog.userId},
        })
        res.json(user)
    } catch (err) {
        res.json({error:err})
    }
})
router.get('/:id',async (req,res)=>{
    try{
        const one = await User.findOne({where:{id:req.params.id}})
        res.json(one)
    } catch (error) {
        res.json({error:error})
    }
})

router.post('/',async (req, res)=>{
    try {
        const result=await User.create({
            username:req.body.user.username,
            password:req.body.user.password
        })
        res.json(result)
    } catch (error) {
        res.json({error:error})
    }
})

module.exports=router;