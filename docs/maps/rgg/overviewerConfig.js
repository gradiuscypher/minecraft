var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "maxZoom": 8,
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "path": "day",
            "north_direction": 0,
            "base": "",
            "spawn": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "world": "world",
            "minZoom": 0,
            "last_rendertime": 1598594179,
            "name": "Daytime Render",
            "poititle": "Markers",
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "isOverlay": false
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1598594565",
        "debug": true,
        "controls": {
            "spawn": true,
            "zoom": true,
            "coordsBox": true,
            "mapType": true,
            "overlays": true,
            "pan": true,
            "compass": true
        }
    }
};
