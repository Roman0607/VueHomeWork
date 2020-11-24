import Home from '@/components/Home'
import AddPersone from '@/components/AddPersone'
import ViewPersone from '@/components/ViewPersone'
import Persone from '@/components/Persone'

export const routes=[
    {
        path:'', component:Home
    },
    {
        path:'/persone', component:Persone, children:[
             {
        path:'/addPersone', component:AddPersone
    },
    {
        path:'/viewPersone', component:ViewPersone
    }
        ]
    }
   
]