
const productos =[
    {id:"1", name:"Play Station 4", precio:"190.000", categoria:"Consola", img:"https://i.postimg.cc/bJkL0KVd/Play4.png", stock:"15",descripcion:"Memoria 100 GB" },
    {id:"2", name:"Play Station 5", precio:"350.000", categoria:"Consola",img:"https://i.postimg.cc/WzV85Xx8/Play5.png", stock:"10",descripcion:"Para juegos fisicos"},
    {id:"3", name:"Nintendo Switch", precio:"180.000", categoria:"Consola", img:"https://i.postimg.cc/hv44bq40/nintendo-Switch-Home.png",stock:"8",descripcion:"Consola regular"},
    {id:"4", name:"Nintendo Switch Lite", precio:"110.000", categoria:"Consola", img:"https://i.postimg.cc/9QDMnVd8/nintendo-Switch-Lite.png",stock:"7", descripcion:"Portatil"},
    {id:"5", name:"FIFA 23", precio:"22.000",categoria:"Juego", img:"https://i.postimg.cc/hjWfmw7C/fifa23-Ps4.png",stock:"6",descripcion:" PS 4"},
    {id:"6", name:"God Of War Ragnarok",precio:"32.000", categoria:"Juego",img:"https://i.postimg.cc/SQVxQjV1/GoWPs4.png",stock:"5", descripcion:" PS 4"},
    {id:"7", name:"The Last of Us II",precio:"26.000", categoria:"Juego", img:"https://i.postimg.cc/j2R6HCJk/The-Last-Of-Us-IIPs4.png",stock:"4", descripcion:" PS 4"},
    {id:"8", name:"FIFA 23",precio:"30.000", categoria:"Juego",img:"https://i.postimg.cc/cHB4nJWH/fifaPs5.png",stock:"3", descripcion:" PS 5"},
    {id:"9", name:"God Of War Ragnarok",precio:"36.000",categoria:"Juego",img:"https://i.postimg.cc/wMWqwb7Y/GOWPs5.png",stock:"6",descripcion:" PS 5"},
    {id:"10", name:"Resident Evil 4",precio:"36.000",categoria:"Juego",img:"https://i.postimg.cc/VLLB5rwJ/resident-Evil-Ps5.png",stock:"4",descripcion:" PS 5"},
    {id:"11", name:"Pokemon Dungeon",precio:"22.000",categoria:"Juego",img:"https://i.postimg.cc/R0fw2w7D/Pokemon-NSW.png",stock:"10",descripcion:"Nintendo"},
    {id:"12", name:"Smash Bros Ultimate",precio:"26.500",categoria:"Juego",img:"https://i.postimg.cc/NjZ1NdHX/Smash-Bros-NSW.png",stock:"8",descripcion:"Nintendo"},
    {id:"13", name:"Zelda",precio:"23.300", categoria:"Juego",img:"https://i.postimg.cc/Pr3bDXf2/zeldaNSW.png",stock:"7",descripcion:"Nintendo"},
    {id:"14", name:"Auriculares Sony PS4",precio:"67.200",categoria:"Accesorio",img:"https://i.postimg.cc/WzZ8nx9h/auriculares-PS4.png",stock:"5",descripcion:" PS 4"},
    {id:"15", name:"Auriculares Sony PS5",precio:"77.200",categoria:"Accesorio",img:"https://i.postimg.cc/BZFBd9gv/auriculares-Ps5.png",stock:"6",descripcion:" PS 5"},
    {id:"16", name:"Auriculares HyperX",precio:"56.800",categoria:"Accesorio",img:"https://i.postimg.cc/QtxJ2HfG/auriculares-Hyperx.jpg",stock:"15",descripcion:" PS 4, PS 5"},
    {id:"17", name:"Joistick Sony PS 4",precio:"28.200",categoria:"Accesorio",img:"https://i.postimg.cc/VLL5XXdc/joistick-PS.png",stock:"20",descripcion:" PS 4"},
    {id:"18", name:"Joistick Sony PS 5",precio:"37.700",categoria:"Accesorio",img:"https://i.postimg.cc/9XBr4LXp/Joistick-Ps5.png",stock:"16",descripcion:" PS 5"},
]

export const getProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },500)
    })
}

export const getProductosById =(productosId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.find(prod=>prod.id=== productosId))
        },500)
    })
}