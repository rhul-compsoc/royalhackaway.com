import React, { Component } from "react"

class EventInternetConnectivity extends Component {
  render() {
    const { ssid, username, password } = this.props.internet

    return (
      <section>
        <div className="container inner-sm">
          <div className="row justify-content-center">
            <div className="col-auto center-block text-center">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th className="text-center" colSpan="3">
                      Get Online
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <b>Network SSID</b>
                    </td>
                    <td>
                      <code>{ssid}</code>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>Username</b>
                    </td>
                    <td>
                      <code>{username}</code>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>Password</b>
                    </td>
                    <td>
                      <code>{password}</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export { EventInternetConnectivity }
