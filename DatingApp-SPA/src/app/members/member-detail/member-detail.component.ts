import { AlertifyService } from './../../services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor( private route: ActivatedRoute , private alertify:AlertifyService) { }

  ngOnInit() {

    this.route.data.subscribe(data => {
      this.user = data['user'];
    });

    this.galleryOptions = [
      {
          width: '100%',
          height: '500px',
          imagePercent:100,
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          preview: false
      }
    ];

    this.galleryImages = this.getImages();

  }

  getImages(){
    const imageUrls =[];
    for (const photo of this.user.photos) {
      
      imageUrls.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url,
        description: photo.description
      });

    }

    return imageUrls;
    
  }

}
