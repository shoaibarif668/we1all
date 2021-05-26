import React from "react";
import { NavLink } from "react-router-dom";
const ProfileChangePassword = () => {
  return (
    <>
      <div class="edit-profile-container">
        <div class="block-title">
          <h4 class="grey">
            <i class="icon ion-ios-locked-outline"></i>Change Password
          </h4>
          <div class="line"></div>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate
          </p>
          <div class="line"></div>
        </div>
        <div class="edit-block">
          <form name="update-pass" id="education" class="form-inline">
            <div class="row">
              <div class="form-group col-xs-12">
                <label for="my-password">Old password</label>
                <input
                  id="my-password"
                  class="form-control input-group-lg"
                  type="password"
                  name="password"
                  title="Enter password"
                  placeholder="Old password"
                />
              </div>
            </div>
            <div class="row">
              <div class="form-group col-xs-6">
                <label>New password</label>
                <input
                  class="form-control input-group-lg"
                  type="password"
                  name="password"
                  title="Enter password"
                  placeholder="New password"
                />
              </div>
              <div class="form-group col-xs-6">
                <label>Confirm password</label>
                <input
                  class="form-control input-group-lg"
                  type="password"
                  name="password"
                  title="Enter password"
                  placeholder="Confirm password"
                />
              </div>
            </div>
            <p>
              <NavLink to="#">Forgot Password?</NavLink>
            </p>
            <button class="btn btn-primary">Update Password</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default ProfileChangePassword;
