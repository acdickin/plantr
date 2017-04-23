class Api{
  static headers(){
    return{
      'Accept':'application/json',
      'Content-Type':'application/json',
      'dataType':'json',
      'X-Requested-with':'XMLHttpRequest',
      'X-Mashape-Key':'djfdsjafldsjaflkdsfklajsdf',
    }
  }
  static get(route){
    return this.xhr(route,null,'GET');
  }
  static put(route,params){
    return this.xhr(route,null,'PUT');
  }
  static post(route){
    return this.xhr(route,null,'POST');
  }
  static delete(route){
    return this.xhr(route,null,'DELETE');
  }
  static xhr(route,params,ver){
    const host=''
    const url='${host}${route}'
    let options = Object.assign({method:verb}, params?{body:JSON.stringify(params)}:null);
    options.headers=Api.headers()
    return fetch(url,options).then(resp =>{
      let json =resp.json();
      if (resp.ok){
        return json;
      }
      return.json.then(err=>{throw err});
    });
  }
}
export default Api
