export const entryService = {

    getTopEntries : () => new Promise((res, rej)=>{
        setTimeout(function() {
            res([
                {
                    entryId: "1",
                    title: "test 1",
                    body: "wow such doge" 
                },
                {
                    entryId: "2",
                    title: "test 2",
                    body: "This is a post"
                }    
            ])    
            }, 4000);
    }),

    addEntry : (entry) => new Promise((res, rej) => {
        setTimeout(function (){
            res(entry);

        }, 500);
    })
}