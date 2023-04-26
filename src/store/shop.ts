import { Module, VuexModule, Mutation } from "vuex-module-decorators"

@Module({
  name: "shop",
  stateFactory: true,
  namespaced: true,
})
class Shop extends VuexModule {
  item2 = "error"
  price2 = "error"
  username = "error"
  userid = "error"
  email = "error"
  signedin = false
  visible = false
  admin = false



  @Mutation
  setItem(item: string) {
    this.item2 = item
  }

  @Mutation
  setPrice(price:  string) {
    this.price2 = price
  }

  @Mutation
  setSignedIn(value: boolean) {
    this.signedin = value 
  }

  @Mutation
  toggleVisibility(value?: boolean) {
    this.visible = value !== undefined ? value : !this.visible
  }

  @Mutation
  setUsername(username: string) {
    this.username = username
  }

  @Mutation
  setUserid(userid: string) {
    this.userid = userid
  }

  @Mutation
  setEmail(email: string) {
    this.email = email
  }

  @Mutation
  setAdmin(value: boolean) {
    this.admin = value
  }
}

export default Shop
