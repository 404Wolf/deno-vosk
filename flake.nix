{
  description = "Deno bindings for Vosk Speech Recognition Toolkit";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {inherit system;};
    in {
      devShells.default = pkgs.mkShell {
        shellHook = ''
          export VOSKLIB_PATH=$(pwd)/input/libvosk.so
          export VOSK_MODEL_PATH=$(pwd)/model
        '';
        packages = with pkgs; [
          deno
          jq
          alsa-utils
        ];
      };
    });
}
