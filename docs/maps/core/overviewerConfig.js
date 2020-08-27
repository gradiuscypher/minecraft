var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "tileSize": 384,
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "imgextension": "png",
            "defaultZoom": 1,
            "minZoom": 0,
            "world": "Core01",
            "north_direction": 0,
            "maxZoom": 10,
            "path": "day",
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "base": "",
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1598529480,
            "isOverlay": false,
            "zoomLevels": 10
        }
    ],
    "map": {
        "cacheTag": "1598529685",
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "mapType": true,
            "zoom": true,
            "pan": true,
            "overlays": true,
            "spawn": true,
            "coordsBox": true,
            "compass": true
        }
    }
};
