package com.groupathy;

import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.groupathy.circularProgressBar.CircularProgressbarViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class GroupathyPackages implements ReactPackage {

    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @NonNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactContext) {
        List<ViewManager> customViewManagers = new ArrayList<>();
        customViewManagers.add(new CircularProgressbarViewManager());
        return customViewManagers;
    }

}
