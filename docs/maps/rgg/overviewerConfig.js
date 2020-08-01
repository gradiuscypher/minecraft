var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERLEFT": 0,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "isOverlay": false,
            "world": "world",
            "poititle": "Markers",
            "base": "",
            "north_direction": 0,
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1596293779,
            "zoomLevels": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "showlocationmarker": true,
            "center": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "path": "day",
            "imgextension": "png",
            "maxZoom": 8
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1596294163",
        "controls": {
            "overlays": true,
            "zoom": true,
            "compass": true,
            "coordsBox": true,
            "spawn": true,
            "pan": true,
            "mapType": true
        },
        "north_direction": "lower-left"
    }
};
