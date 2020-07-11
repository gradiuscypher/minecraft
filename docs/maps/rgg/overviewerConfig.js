var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "image": {
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png"
        },
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "zoomLevels": 8,
            "name": "Daytime Render",
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1594425380,
            "path": "day",
            "base": "",
            "spawn": [
                3,
                80,
                12
            ],
            "center": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "world": "world",
            "poititle": "Markers",
            "defaultZoom": 1,
            "isOverlay": false,
            "minZoom": 0,
            "imgextension": "png",
            "maxZoom": 8
        }
    ],
    "map": {
        "cacheTag": "1594426180",
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "spawn": true,
            "coordsBox": true,
            "overlays": true,
            "compass": true,
            "pan": true,
            "mapType": true,
            "zoom": true
        }
    }
};
