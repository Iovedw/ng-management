import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';
import axios from 'axios';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    let params: any = {};
    params.currentPage = 1;
    params.pageSize = 10;
    // console.info(axios)
    axios({
      method:'post',
      baseURL:'/api',
      url:'brand/list',
      headers:{'token':'admin'},
      data:params
    }).then(function(response) {
      // handle success
        console.log(response);
    }).
    catch(function(error) {
      console.log(error)
      // handle error console.log(error);
    }).then(function(e) {
      // always executed
      console.log(e)
    });
    
    // this.apiService.post("brand/list",params,{}).subscribe(r => {
    //   console.log(r)
    //   if(r.result == "0") { 
    //   }
    // });

  }

}
