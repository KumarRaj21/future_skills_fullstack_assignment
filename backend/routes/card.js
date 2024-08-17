const router = require("express").Router();
const Card = require("../Modals/CardModal");

router.post('/add-card',async (req,res)=>{
    try {
        const { title, description} = req.body
            const card = new Card({title, description});
            await card.save().then(() => res.status(200).json({ card }));
    } catch (error) {
        res.status(200).json({message:"card already exists or invalid data"})
    }
})

router.get('/get-cards', async (req,res)=>{
    try {
        const cards = await Card.find()
        if(cards.length !== 0 ){
         res.status(200).json({ cards })
        }
        else{
            res.status(200).json({message:"no cards"})
        }
    } catch (error) {
        res.status(200).json({message:"server error"})
    }
})

router.get('/get-card/:title', async (req,res)=>{
    try {
        const {title}= req.params;
        const trimmedTitle = title.trim();
        const searchedCard = await Card.find({ title: { $regex: trimmedTitle, $options: 'i' } });
        if(searchedCard !== 0){
            res.status(200).json({ searchedCard });
        }
        else{
            res.status(200).json({message : "no cards"})
        }
    } catch (error) {
        res.status(200).json({message:"server error"})
    }
})

module.exports = router