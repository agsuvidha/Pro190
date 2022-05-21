AFRAME.registerComponent("marker-handler",{
    init:async function(){
        this.el.addEventListener('markerFound',()=>{
            console.log('marker-found')
            this.handleMarkerFound()
        })

        this.el.addEventListener('markerLost',()=>{
            console.log('marker-lost')
            this.handleMarkerLost()
        })
    },
    handleMarkerFound:function(){
        var buttonDiv=document.getElementById('button-div')
        buttonDiv.style.display='flex'
       var ratingButton=document.getElementById('rating-button')
       var orderButton=document.getElementById('order-button')
      
       ratingButton.addEventListener('click',function(){
           swal({
               icon:'warning',
               title:'Thanks for ur rating',
               text:'rating'
           })

       })
       orderButton.addEventListener('click',function(){
        swal({
            icon:'warning',
            title:'Thanks for ur order',
            text:'order'
        })
    })

    },
    
    handleMarkerLost:function(){
        var buttonDiv=document.getElementById('button-div')
        buttonDiv.style.display='none'
        console.log('marker-lost')
      }
      
})

