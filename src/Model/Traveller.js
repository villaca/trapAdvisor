export default class Traveller {

  constructor (id, name) {
    this.id = id
    this.name = name
    this.photo = 'http://graph.facebook.com/' + this.id + '/picture?type=normal'
  }

}
