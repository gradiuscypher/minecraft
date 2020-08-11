var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "last_rendertime": 1597110979,
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world",
            "north_direction": 0,
            "center": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "showlocationmarker": true,
            "spawn": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "defaultZoom": 1,
            "minZoom": 0,
            "isOverlay": false,
            "path": "day",
            "name": "Daytime Render",
            "zoomLevels": 8,
            "poititle": "Markers"
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "mapType": true,
            "coordsBox": true,
            "spawn": true,
            "zoom": true,
            "pan": true,
            "compass": true
        },
        "debug": true,
        "cacheTag": "1597111363"
    }
};
