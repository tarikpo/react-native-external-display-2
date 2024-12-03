# ios/react-native-external-display.podspec
require_relative '../node_modules/react-native/scripts/react_native_pods'

Pod::Spec.new do |s|
  s.name         = "react-native-external-display"
  s.version      = "0.6.6"
  s.summary      = "React Native view renderer in External Display"

  s.description  = <<-DESC
                   A React Native module for rendering views on an external display.
                   DESC

  s.homepage     = "https://github.com/tarikpo/react-native-external-display-2"
  s.license      = "MIT"
  s.author       = { "Tarik Porobic" => "your.email@example.com" }
  s.source       = { :git => "https://github.com/tarikpo/react-native-external-display-2.git", :tag => s.version.to_s }

  s.platform     = :ios, "10.0"

  s.dependency "React-Core"

  s.source_files  = "ios/**/*.{h,m,swift}"
  s.requires_arc = true

  # If using Swift, specify the Swift version
  s.swift_version = '5.0'
end
