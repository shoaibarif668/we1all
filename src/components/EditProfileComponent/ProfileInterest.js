import React from "react"
import {NavLink} from "react-router-dom"
const ProfileInterest = () =>{
    return(
        <>
        
              <div class="edit-profile-container">
                <div class="block-title">
                  <h4 class="grey"><i class="icon ion-ios-heart-outline"></i>My Interests</h4>
                  <div class="line"></div>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                  <div class="line"></div>
                </div>
                <div class="edit-block">
                  <ul class="list-inline interests">
                  	<li><NavLink to=""><i class="icon ion-android-bicycle"></i> Bycicle</NavLink></li>
                  	<li><NavLink to=""><i class="icon ion-ios-camera"></i> Photgraphy</NavLink></li>
                  	<li><NavLink to=""><i class="icon ion-android-cart"></i> Shopping</NavLink></li>
                  	<li><NavLink to=""><i class="icon ion-android-plane"></i> Traveling</NavLink></li>
                  	<li><NavLink to=""><i class="icon ion-android-restaurant"></i> Eating</NavLink></li>
                  </ul>
                  <div class="line"></div>
                  <div class="row">
                    <p class="custom-label"><strong>Add interests</strong></p>
                    <div class="form-group col-sm-8">
                      <input id="add-interest" class="form-control input-group-lg" type="text" name="interest" title="Choose Interest" placeholder="Interests. For example, photography"/>
                    </div>
                    <div class="form-group col-sm-4">
                      <button class="btn btn-primary">Add</button>
                    </div>
                  </div>
                </div>
              </div>
        </>
    )
}
export default ProfileInterest;