import 'dotenv/config'

const CONFIG = {
  db: process.env.DB,
  jwt_private: `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEApKAafPB/KXl7/nhhC3gxsmWXWdZKAMBX7HFGXjxyg74oBfjJ
aX9WYd20FB1T+RZ4XfpK+lAnMLhz0lnmWSQLUrQyf51KiRDOJZlaIahxN4T3HUG6
zhpQu+8Fw+/PvYBa7OODClnfrAS+28C2kYaO1epZt70LrpZwJbXv3p6zN8da7FSN
ct9Qlk3xY+s+UejRcW6243ZNGgxVYbJc492UVLHdg+mcRaCzx0GGI+msHTGWJG0s
RTIDwW7OQA4yEnEPeUKKXoxB/E7QO1wtJ0Lo0P7EikMOmviG3XgKcQHhhXzUpaZY
jQQSHaVqM2A9IjQ6+BEwjVMEzpUX3R0eBy+ZRwIDAQABAoIBACoZp6x79IkuwD77
mhXMzyjIQkR/QL2gctvMvCotWzvFzYZ5cUjBf93XTM44EdmJnY6rC7Gn/d2/zh7l
TrtNNHgaDTAFkaIr4gxLg3lIEmwYXPnmbVd3812cauUI1x+nS5l5NXHYOhNLw2N/
jTD6MF0UaY1Lk0k6v8NlG8ra2wpQT9mpw7ep/wTWLhjWL6upVsfoF1vISVnIlhE+
4iD4WN5J6ACN+w0kyslTbrhTt6dbWcXgcaj+DxgoJgQNAASQ3xOMB1NXoTXezuH1
DRYxWpPdvQg8rc3TVYPDfAzmLwT2rKWHUl00nNMZkyWcT9P69KKCYqVgYpY6xSWa
wjbfAEECgYEA3zyQXP1ZyqdDgwQlK03hOUoLiC3BQAyCC58y76IkiupH1RxLr/FW
joIf71U/zsh45imAOUW8iEJfUNxRaQig/K5rcR5ZtiQZb5Tcf/oAPSzx8zbXqQRd
nrFQoSz2xxQWvRPPfMfkmbt35lDDpjtx6IRHDsOv9wm/4mlNTfaEsJ0CgYEAvMln
Hb3GL1CYf/w9sjVhnYLt4sRgSnxXlEVqetKb7RZNGTrsj+bN/u3pIkwfDPC4Lm8Z
jsaFH0QNMizTVFFIn/urzCem7eI6b+nEu01MrcK3Y6AClTTUxtOrQ2EXgeUH+g5r
FWCSTZ6RIab9Cn57zkZ4TedoCKhm0INVAkM88jMCgYBt2+Q/nv6dWItE4rlYAk+g
Xewm7D16Q62MAqCShXzuUDVhjzdAMsiiAS+uHIn2PXoh6rKLfOI3PFKj/Iij4/c1
4rBFTuZfWIyb+Oo6oNGVSZUYWBjxuJBKFIDVkMcxWZWHH0Sw5758WWG8GmruV7rK
7q35ehwSut2PkrrUb0kFkQKBgCanqnh5ghnwC7mxAUT7Dyi8RU84XGsD+L7AU+Qg
OZMbDOBMo2F3pdg8CI9gPL9ejqfbUcVdOqbDPVx3tzG9jvxLAMtFlzWAK+z8Va7w
TfIKO5ini7/XWHX5o0ihmbmcFr0JtL1kz7Aa9qaIVamPanQ7E6kH59JWAO9S5NYY
xGLnAoGAAtGFCGQTEmf0c9Ygko9CmPeKE5BtppefXgTNu2mpV/KRGtTJHfrclToM
+Uc9dW8EMbNF7DVGdmXlhhqIq6Q4iJLlMYKY+Lo0uDQj1VdY4SaM7PuwRfeEYNKy
OgMz9U3Pu1TOtJfgyybm3lYIxMQUiifHepuFUvXt+GTkKVbo60g=
-----END RSA PRIVATE KEY-----`,
  jwt_public: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApKAafPB/KXl7/nhhC3gx
smWXWdZKAMBX7HFGXjxyg74oBfjJaX9WYd20FB1T+RZ4XfpK+lAnMLhz0lnmWSQL
UrQyf51KiRDOJZlaIahxN4T3HUG6zhpQu+8Fw+/PvYBa7OODClnfrAS+28C2kYaO
1epZt70LrpZwJbXv3p6zN8da7FSNct9Qlk3xY+s+UejRcW6243ZNGgxVYbJc492U
VLHdg+mcRaCzx0GGI+msHTGWJG0sRTIDwW7OQA4yEnEPeUKKXoxB/E7QO1wtJ0Lo
0P7EikMOmviG3XgKcQHhhXzUpaZYjQQSHaVqM2A9IjQ6+BEwjVMEzpUX3R0eBy+Z
RwIDAQAB
-----END PUBLIC KEY-----`
}

export default CONFIG
