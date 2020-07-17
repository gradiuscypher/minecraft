var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "LOWERRIGHT": 2
    },
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1594969281",
        "controls": {
            "pan": true,
            "compass": true,
            "spawn": true,
            "zoom": true,
            "mapType": true,
            "coordsBox": true,
            "overlays": true
        }
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "minZoom": 0,
            "name": "Daytime Render",
            "path": "day",
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "last_rendertime": 1594969080,
            "maxZoom": 9,
            "poititle": "Markers",
            "isOverlay": false,
            "zoomLevels": 9,
            "base": "",
            "imgextension": "png",
            "defaultZoom": 1
        }
    ]
};
