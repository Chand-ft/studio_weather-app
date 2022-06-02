/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-weatherSearch',
  templateUrl: './weatherSearch.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class weatherSearchComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_1XqW5CIZuE3dyx8J(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_1XqW5CIZuE3dyx8J(bh) {
    try {
      bh = this.sd_T9V3wrftEIvpbGz5(bh);
      //appendnew_next_sd_1XqW5CIZuE3dyx8J
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1XqW5CIZuE3dyx8J');
    }
  }

  updateLog(logobject: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { logobject: logobject };
      bh.local = {};
      bh = this.sd_aLarc0I2DIRlzn3x(bh);
      //appendnew_next_updateLog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_prsN5xGbfPn2Syeu');
    }
  }

  processWeather(cityName: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { cityName: cityName };
      bh.local = {};
      bh = this.getData(bh);
      //appendnew_next_processWeather
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_D1iboWGArrAnkqph');
    }
  }

  sd_756rwGQ7mPi4h9Cl(cityName: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { cityName: cityName };
      bh.local = { ssdWeatherApiUrl: undefined };
      bh = this.cityNameNullCheck(bh);
      //appendnew_next_sd_756rwGQ7mPi4h9Cl
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_756rwGQ7mPi4h9Cl');
    }
  }

  //appendnew_flow_weatherSearchComponent_start

  sd_T9V3wrftEIvpbGz5(bh) {
    try {
      this.page.searchString = undefined;
      this.page.logArray = [];
      //appendnew_next_sd_T9V3wrftEIvpbGz5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T9V3wrftEIvpbGz5');
    }
  }

  sd_aLarc0I2DIRlzn3x(bh) {
    try {
      const page = this.page;
      page.logArray.push(bh.input.logobject);
      //appendnew_next_sd_aLarc0I2DIRlzn3x
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aLarc0I2DIRlzn3x');
    }
  }

  getData(bh) {
    try {
      const page = this.page;
      console.log(bh, this.page);
      this.page.showCard =
        typeof this.page.weatherdata === 'object' &&
        Object.keys(this.page.weatherdata).length > 2;
      console.log('aftyer', this.page.showCard);

      bh = this.sd_sDBgouqOVsuw0Fr9(bh);
      //appendnew_next_getData
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8QnLEZinW0D2putM');
    }
  }

  async sd_sDBgouqOVsuw0Fr9(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          this.page.showCard,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_urzhh2sWS4HvpfHq(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_9mqyVSeYqq3Uyupl(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sDBgouqOVsuw0Fr9');
    }
  }

  sd_urzhh2sWS4HvpfHq(bh) {
    try {
      const page = this.page;
      console.log('error');
      bh = this.errorLog(bh);
      //appendnew_next_sd_urzhh2sWS4HvpfHq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_urzhh2sWS4HvpfHq');
    }
  }

  errorLog(bh) {
    try {
      let outputVariables = this.updateLog(bh.bh.input.errorlog);

      //appendnew_next_errorLog
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4e1F9vDcSkXTLCMX');
    }
  }

  sd_9mqyVSeYqq3Uyupl(bh) {
    try {
      const page = this.page;
      localStorage.lastCity = bh.input.cityName;
      console.log('input', bh.input);
      bh.input.successlog = {
        type: 'info',
        message:
          'Successfully Retrieved the Weather Data for city: ' +
          bh.input.cityName,
      };
      bh = this.successLog(bh);
      //appendnew_next_sd_9mqyVSeYqq3Uyupl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9mqyVSeYqq3Uyupl');
    }
  }

  successLog(bh) {
    try {
      let outputVariables = this.updateLog(bh.bh.input.successlog);

      //appendnew_next_successLog
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8DrKLEOTieMhrhUO');
    }
  }

  sd_tz3jvS4QWEImL3ex(bh) {
    try {
      const page = this.page;
      bh.input.errorlog = {
        type: 'error',
        message: `Weather Data Not Found${
          bh.input.cityName ? ` For the City: ${bh.input.cityName}` : ''
        }!`,
      };
      bh = this.errorLog(bh);
      //appendnew_next_sd_tz3jvS4QWEImL3ex
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tz3jvS4QWEImL3ex');
    }
  }

  cityNameNullCheck(bh) {
    try {
      if (
        this.sdService.operators['istype'](
          bh.input.cityName,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = this.snackbar(bh);
      } else if (
        this.sdService.operators['null'](
          bh.input.cityName,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.snackbar(bh);
      } else if (
        this.sdService.operators['empty'](
          bh.input.cityName,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.snackbar(bh);
      } else if (
        this.sdService.operators['istype'](
          bh.input.cityName,
          'string',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_T59muwMCjGeod5WZ(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EexoplwflKLKW2jU');
    }
  }

  snackbar(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Invalid City Name', 'Okay', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_snackbar
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NFmIkdDkigLlKHKh');
    }
  }

  sd_T59muwMCjGeod5WZ(bh) {
    try {
      const page = this.page;
      bh.local.ssdWeatherApiUrl = `${bh.system.environment.properties.ssdURL}weather`;
      bh.local.qparams = {
        cityName: bh.input.cityName,
      };
      bh = this.callServerFlow(bh);
      //appendnew_next_sd_T59muwMCjGeod5WZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T59muwMCjGeod5WZ');
    }
  }

  async callServerFlow(bh) {
    try {
      let requestOptions = {
        url: bh.input.ssdWeatherApiUrl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: { 'bh.local': 'qparams' },
        body: undefined,
      };
      this.page.weatherdata = await this.sdService.nHttpRequest(requestOptions);
      bh = this.callProcessWeather(bh);
      this.sd_HDSV8Xmz6FmWwfPb(bh);
      //appendnew_next_callServerFlow
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mk7lG4zpxHaRMkBd');
    }
  }

  callProcessWeather(bh) {
    try {
      let outputVariables = this.processWeather(bh.input.cityName);

      //appendnew_next_callProcessWeather
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ySYziTjjXnmx6Q6f');
    }
  }

  sd_HDSV8Xmz6FmWwfPb(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.ssdWeatherApiUrl);
      //appendnew_next_sd_HDSV8Xmz6FmWwfPb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HDSV8Xmz6FmWwfPb');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false ||
      this.sd_PK0nexA60FdTZPkG(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_PK0nexA60FdTZPkG(bh) {
    const catchConnectedNodes = ['sd_tz3jvS4QWEImL3ex', 'sd_4e1F9vDcSkXTLCMX'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = this.sd_tz3jvS4QWEImL3ex(bh);
    //appendnew_next_sd_PK0nexA60FdTZPkG
    return true;
  }
  //appendnew_flow_weatherSearchComponent_Catch
}
