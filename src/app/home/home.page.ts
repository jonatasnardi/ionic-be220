import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { SlideModel } from '../models/slide.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public home: string;

  @ViewChild('slide', { static: false }) slide: IonSlides;

  slider: any;

  slideOpts: SlideModel = {
    initialSlide: 0,
    slidesPerView: 2,
    loop: false,
    centeredSlides: false,
    spaceBetween: 10
  };


  constructor(private activatedRoute: ActivatedRoute) {
    this.slider =
    {
      slidesItems: [
        {
          id: 1,
          image: 'assets/images/image1.png',
        },
        {
          id: 2,
          image: 'assets/images/image2.png',
        },
        {
          id: 3,
          image: 'assets/images/image3.png',
        },
        {
          id: 4,
          image: 'assets/images/image4.png',
        },
        {
          id: 5,
          image: 'assets/images/image5.png',
        }
      ]
    };
  }

  ngOnInit() {
    this.home = this.activatedRoute.snapshot.paramMap.get('id');
  }

  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}
