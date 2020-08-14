var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "mapDivId": "mcmap"
    },
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "zoom": true,
            "coordsBox": true,
            "spawn": true,
            "pan": true,
            "mapType": true,
            "overlays": true
        },
        "cacheTag": "1597374082",
        "debug": true
    },
    "tilesets": [
        {
            "north_direction": 0,
            "minZoom": 0,
            "base": "",
            "last_rendertime": 1597373880,
            "imgextension": "png",
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "path": "day",
            "defaultZoom": 1,
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "zoomLevels": 10,
            "name": "Daytime Render",
            "poititle": "Markers",
            "showlocationmarker": true,
            "maxZoom": 10
        }
    ]
};
