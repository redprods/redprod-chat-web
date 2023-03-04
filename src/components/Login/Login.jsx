import React from "react";
import "./Login.scss"

export const Login = () => {
  return <div>
<input id="checkbox-activate" type="checkbox"/>
<label for="checkbox-activate">
  <div class="btn-activate">
    <div class="check-icon"><i class="fas fa-arrow-up"></i><i class="fas fa-check"></i></div>
    <div class="btn-text">
      <p>Activate</p>
      <p>Waiting</p>
      <p>Activated</p>
    </div>
  </div>
</label>
  </div>
};
