let userProfileParams = {
    aid: "1988",
    app_language: "en",
    app_name: "tiktok_web",
    battery_info: "1",
    browser_language: "en-GB",
    browser_name: "Mozilla",
    browser_online: "true",
    browser_platform: "Linux x86_64",
    browser_version: "5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
    channel: "tiktok_web",
    cookie_enabled: "true",
    device_id: "7132454890065069574",
    device_platform: "web_pc",
    focus_state: "true",
    from_page: "user",
    history_len: "2",
    is_fullscreen: "false",
    is_page_visible: "true",
    os: "linux",
    priority_region: "",
    referer: "",
    region: "DE",
    screen_height: "1080",
    screen_width: "1920",
    tz_name: "Asia/Tehran",
    webcast_language: "en",
    msToken: "v29SjMJOsvwIZNeKNOYCODtfQqaFCsSwXNq2ZUhaO9Kb7rEwl7556Mdt_2Lgsn4btmkl8mggic9-PWHmwDz3Fjs5B3OBi8CDwIMfTW1JOptgMdXlIes7K_XRQ-4Y-LolB8kjg0S5rBe3qzVxOw==",
    "X-Bogus": "DFSzswVYmnvANSfUS6EUhHnCkKnj",
    _signature: "_02B4Z6wo00001Tly7CwAAIDDvflc7t6mmuU5cuiAACyjd5"
};

const serialize = function (obj: any) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join('&');
};

export default serialize(userProfileParams);
