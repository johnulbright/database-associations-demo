const router=require('express').Router();
const {User,Dog}=require('../models/index')

router.get('/all',async (req,res)=>{
    try{
        const all = await Dog.findAll()
        res.json(all)
    } catch (error) {
        res.json({error})
    }
})
router.get('/user/:uid',async (req,res)=>{
    try{
        const user = await User.findOne({
            where:{id:req.params.uid},
            include:Dog
        })
        res.json(user);
    } catch (err) {
        res.json({error:err})
    }
})
router.get('/:id',async (req,res)=>{
    try{
        const one = await Dog.findOne({where:{id:req.params.id}})
        res.json(one)
    } catch (error) {
        res.json({error:error})
    }
})

router.post('/',async (req, res)=>{
    try {
        const result=await Dog.create({
            name:req.body.dog.name,
            sex:req.body.dog.sex,
            breed:req.body.dog.breed,
            birthDate:req.body.dog.birthDate,
            userId:req.body.userId
        })
        res.json(result)
    } catch (error) {
        res.json({error:error})
    }
})

module.exports=router;