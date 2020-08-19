var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERLEFT": 0
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "imgextension": "png",
            "world": "Core01",
            "minZoom": 0,
            "isOverlay": false,
            "poititle": "Markers",
            "north_direction": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "bgcolor": "#1a1a1a",
            "maxZoom": 10,
            "defaultZoom": 1,
            "base": "",
            "path": "day",
            "showlocationmarker": true,
            "last_rendertime": 1597845480,
            "name": "Daytime Render",
            "center": [
                80,
                96,
                192
            ]
        }
    ],
    "map": {
        "controls": {
            "mapType": true,
            "zoom": true,
            "overlays": true,
            "coordsBox": true,
            "pan": true,
            "spawn": true,
            "compass": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1597845684"
    }
};
