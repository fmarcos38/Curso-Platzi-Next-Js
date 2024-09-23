"use server"
import { GraphQLClientSingleton } from "app/graphql"
import { createUserMutation } from "app/graphql/mutations/createUserMutation"
import { createAccessToken } from "app/utils/auth/createAccessToken"
import { redirect } from "next/navigation"

//crea cliente/user
export const handleCreateUser = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData)
    delete formDataObject["password_confirmation"]
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
    const variables = {
        input: {
            ...formDataObject,
            phone: '+52' + formDataObject.phone
        }
    }

    const { customerCreate } = await graphqlClient.request(createUserMutation, variables)
    const { customerUserErrors, customer } = customerCreate
    if (customer?.firstName) {
        /* console.log(customer)
        console.log(customerUserErrors) */
        await createAccessToken(formDataObject.email as string, formDataObject.password as string)
        redirect('/store') //una ves realizado el login HAGO redirect a /store
    }
}


//LOGIN
export const handleLogin = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData)
    const accesToken = await createAccessToken(formDataObject.email as string, formDataObject.password as string)
    if(accesToken){
        redirect('/store')
    }
}

