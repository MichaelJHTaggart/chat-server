const messages = [];
let idAssign = 0;

module.exports = {
    createPost: (req, res) => {
        const { text, time } = req.body
        messages.push({ idAssign, text, time });
        idAssign++;
        res.status(200).send(messages)
    },
    readAll: (req, res) => {
        res.status(200).send(messages)
    }


    // if(!idAssign){
    //     res.status(404).send('This message does not exist')
    // } else {

    // }
}

    // readPost: (req, res) => {

    // } 

    //     updatePost: (req, res) => {

    //     }

    //     deletePost: (req, res) => {

    //     }



    //     const message = {
    //     id,
    //     text,
    //     time
    // },


    // app.post((req, res) => {

    // })
    // app.get((req, res) => {
    //  return messages
    // })
    // app.put( , (req, res) => {

    // })
    // app.delete( , (req, res) => {

    // })
