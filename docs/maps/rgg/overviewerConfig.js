var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "zoomLevels": 8,
            "minZoom": 0,
            "center": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "world": "world",
            "poititle": "Markers",
            "defaultZoom": 1,
            "north_direction": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "base": "",
            "maxZoom": 8,
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1595015779,
            "showlocationmarker": true,
            "path": "day"
        }
    ],
    "map": {
        "debug": true,
        "controls": {
            "spawn": true,
            "compass": true,
            "pan": true,
            "coordsBox": true,
            "zoom": true,
            "overlays": true,
            "mapType": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1595016162"
    }
};
