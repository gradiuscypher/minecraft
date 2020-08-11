var overviewerConfig = {
    "map": {
        "cacheTag": "1597147281",
        "controls": {
            "pan": true,
            "zoom": true,
            "compass": true,
            "spawn": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        },
        "north_direction": "lower-left",
        "debug": true
    },
    "tilesets": [
        {
            "base": "",
            "path": "day",
            "north_direction": 0,
            "name": "Daytime Render",
            "imgextension": "png",
            "maxZoom": 10,
            "minZoom": 0,
            "showlocationmarker": true,
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "world": "Core01",
            "last_rendertime": 1597147080,
            "isOverlay": false,
            "defaultZoom": 1,
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a"
        }
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png"
        },
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0
    },
    "worlds": [
        "Core01"
    ]
};
