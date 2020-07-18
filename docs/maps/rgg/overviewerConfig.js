var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png"
        },
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "world": "world",
            "north_direction": 0,
            "poititle": "Markers",
            "showlocationmarker": true,
            "imgextension": "png",
            "spawn": [
                3,
                80,
                12
            ],
            "path": "day",
            "base": "",
            "maxZoom": 8,
            "name": "Daytime Render",
            "last_rendertime": 1595066179,
            "defaultZoom": 1,
            "center": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "zoomLevels": 8
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "cacheTag": "1595066562",
        "controls": {
            "overlays": true,
            "zoom": true,
            "coordsBox": true,
            "compass": true,
            "mapType": true,
            "spawn": true,
            "pan": true
        },
        "north_direction": "lower-left",
        "debug": true
    }
};
