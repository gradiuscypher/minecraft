var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png"
        },
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "last_rendertime": 1596351480,
            "maxZoom": 10,
            "name": "Daytime Render",
            "minZoom": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "base": "",
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "world": "Core01",
            "path": "day",
            "poititle": "Markers",
            "defaultZoom": 1,
            "showlocationmarker": true,
            "imgextension": "png",
            "zoomLevels": 10
        }
    ],
    "map": {
        "debug": true,
        "cacheTag": "1596351683",
        "north_direction": "lower-left",
        "controls": {
            "mapType": true,
            "overlays": true,
            "spawn": true,
            "pan": true,
            "coordsBox": true,
            "compass": true,
            "zoom": true
        }
    }
};
